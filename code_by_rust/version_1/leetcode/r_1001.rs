use std::collections::{HashMap, HashSet};

const DIRS: [[i32; 2]; 9] = [
    [0, 0],
    [1, 1],
    [-1, -1],
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
    [-1, 1],
    [1, -1],
];

pub fn grid_illumination(n: i32, lamps: Vec<Vec<i32>>, queries: Vec<Vec<i32>>) -> Vec<i32> {
    fn match_rule(cache: &HashMap<i32, i32>, grid: &i32) -> bool {
        if let Some(v) = cache.get(grid) {
            *v > 0
        } else {
            false
        }
    }
    let (mut axis_x, mut axis_y, mut axis_x_to_y, mut axis_y_to_x, mut is_bright, mut ret) = (
        HashMap::new(),
        HashMap::new(),
        HashMap::new(),
        HashMap::new(),
        HashSet::new(),
        Vec::new(),
    );
    for lamp in lamps {
        let (x, y) = (lamp[0], lamp[1]);
        if is_bright.contains(&(x, y)) {
            continue;
        }
        is_bright.insert((x, y));
        *axis_x.entry(x).or_insert(0) += 1;
        *axis_y.entry(y).or_insert(0) += 1;
        *axis_x_to_y.entry(x - y).or_insert(0) += 1;
        *axis_y_to_x.entry(x + y).or_insert(0) += 1;
    }
    for query in queries {
        let (x, y) = (query[0], query[1]);
        ret.push(
            (match_rule(&axis_x, &x)
                || match_rule(&axis_y, &y)
                || match_rule(&axis_x_to_y, &(x - y))
                || match_rule(&axis_y_to_x, &(x + y))) as i32,
        );
        for dir in DIRS {
            let (tx, ty) = (x + dir[0], y + dir[1]);
            if tx < 0 || tx >= n || ty < 0 || ty >= n || !is_bright.contains(&(tx, ty)) {
                continue;
            }
            is_bright.remove(&(tx, ty));
            *axis_x.get_mut(&tx).unwrap() -= 1;
            *axis_y.get_mut(&ty).unwrap() -= 1;
            *axis_x_to_y.get_mut(&(tx - ty)).unwrap() -= 1;
            *axis_y_to_x.get_mut(&(tx + ty)).unwrap() -= 1;
        }
    }
    ret
}

#[cfg(test)]
mod test {
    use super::grid_illumination;
    #[test]
    fn test_grid_illumination() {
        assert_eq!(
            vec![1, 1],
            grid_illumination(
                5,
                vec![[0, 0].to_vec(), [4, 4].to_vec()],
                vec![[1, 1].to_vec(), [1, 1].to_vec()]
            )
        )
    }
}
