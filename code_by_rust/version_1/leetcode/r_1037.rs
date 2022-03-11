pub fn is_boomerang(points: Vec<Vec<i32>>) -> bool {
  (points[1][1] - points[0][1]) * (points[2][0] - points[0][0]) != (points[2][1] - points[0][1]) * (points[1][0] - points[0][0])
}

#[cfg(test)]
mod test {
    use super::is_boomerang;
    #[test]
    fn test_is_boomerang() {
      assert_eq!(false, is_boomerang(vec![vec![1,1], vec![2,2], vec![3,3]]))
    }
}
