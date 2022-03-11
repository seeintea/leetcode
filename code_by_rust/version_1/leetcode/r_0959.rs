struct UnionFind {
    parent: Vec<i32>,
}

impl UnionFind {
    fn new(n: usize) -> Self {
        let parent = (0..n as i32).collect();
        UnionFind { parent }
    }

    fn find(&mut self, x: i32) -> i32 {
        if self.parent[x as usize] != x {
            self.parent[x as usize] = self.find(self.parent[x as usize]);
        }
        self.parent[x as usize]
    }

    fn union(&mut self, x: i32, y: i32) {
        let find_x = self.find(x);
        self.parent[find_x as usize] = self.find(y);
    }
}

pub fn regions_by_slashes(grid: Vec<String>) -> i32 {
    let size = grid.len();
    let mut uf = UnionFind::new(4 * size * size);
    for i in 0..size {
        for j in 0..size {
            let root = 4 * (i * size + j);
            let mut val = b' ';
            if j < grid[i].as_bytes().len() {
                val = grid[i].as_bytes()[j]
            }
            match val {
                b'/' => {
                    uf.union(root as i32, (root + 3) as i32);
                    uf.union((root + 1) as i32, (root + 2) as i32);
                }
                b'\\' => {
                    uf.union(root as i32, (root + 1) as i32);
                    uf.union((root + 2) as i32, (root + 3) as i32);
                }
                _ => {
                    uf.union(root as i32, (root + 1) as i32);
                    uf.union((root + 1) as i32, (root + 2) as i32);
                    uf.union((root + 2) as i32, (root + 3) as i32);
                }
            }
            if j + 1 < size {
                uf.union((root + 1) as i32, (4 * (i * size + j + 1) + 3) as i32);
            }
            if i + 1 < size {
                uf.union((root + 2) as i32, (4 * ((i + 1) * size + j)) as i32);
            }
        }
    }
    let mut result = 0;
    for x in 0..(4 * size * size) as i32 {
        if uf.find(x) == x {
            result += 1;
        }
    }
    result
}

#[cfg(test)]
mod tests {
    use super::regions_by_slashes;
    #[test]
    fn test_regions_by_slashes() {
        assert_eq!(
            2,
            regions_by_slashes(vec!["\\".to_string(), "/".to_string()])
        );
        assert_eq!(
            2,
            regions_by_slashes(vec![" /".to_string(), "/".to_string()])
        );
        assert_eq!(
            4,
            regions_by_slashes(vec!["\\/".to_string(), "\\/".to_string()])
        );
        assert_eq!(
            5,
            regions_by_slashes(vec!["/\\".to_string(), "\\/".to_string()])
        );
    }
}
