pub fn dfs(
    s: &String,
    i: i32,
    dp: &Vec<Vec<bool>>,
    res: &mut Vec<Vec<String>>,
    part: &mut Vec<String>,
) {
    let size = s.len();
    if i == size as i32 {
        res.push(part.to_vec());
        return;
    }
    for j in i..size as i32 {
        if dp[i as usize][j as usize] {
            part.push(s[i as usize..(j + 1) as usize].to_string());
            dfs(s, j + 1, dp, res, part);
            part.pop();
        }
    }
}

pub fn partition(s: String) -> Vec<Vec<String>> {
    let size = s.len();
    let str_vec: Vec<char> = s.chars().collect();
    let mut dp_vec: Vec<Vec<bool>> = vec![vec![true; size]; size];
    let mut prev = (size - 1) as i32;
    while 0 <= prev {
        let mut next = prev + 1;
        while next < size as i32 {
            dp_vec[prev as usize][next as usize] = (str_vec[prev as usize]
                == str_vec[next as usize])
                && dp_vec[(prev + 1) as usize][(next - 1) as usize];
            next += 1;
        }
        prev -= 1;
    }
    let mut result: Vec<Vec<String>> = Vec::new();
    let mut part: Vec<String> = Vec::new();
    dfs(&s, 0, &dp_vec, &mut result, &mut part);
    result
}

#[cfg(test)]
mod test {
    use super::*;
    #[test]
    fn test_partition() {
        assert_eq!(
            vec![
                vec!["a".to_string(), "a".to_string(), "b".to_string()],
                vec!["aa".to_string(), "b".to_string()]
            ],
            partition("aab".to_string())
        )
    }
}
