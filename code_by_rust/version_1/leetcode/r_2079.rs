pub fn watering_plants(plants: Vec<i32>, capacity: i32) -> i32 {
  let mut result = 0;
  let mut idx = 0;
  let mut has_water = capacity;
  for plant in plants {
      if plant <= has_water {
          has_water -= plant;
          result += 1;
      } else {
          has_water = capacity - plant;
          result += 2*idx +1;
      }
      idx +=1;
  }
  result
}

pub fn watering_plants_v2(plants: Vec<i32>, capacity: i32) -> i32 {
  let mut obtain_water = 0;
  let mut has_water = capacity;
  for idx in 0..plants.len() {
      let current = plants[idx];
      if current <= has_water  {
          has_water -= current;
      } else {
          has_water = capacity - current;
          obtain_water += idx
      }
  }
  (plants.len() + 2*obtain_water) as i32
}

#[cfg(test)]
mod tests {
  use super::*;
  #[test]
  fn test_watering_plants() {
    assert_eq!(14, watering_plants(vec![2,2,3,3], 5));
    assert_eq!(49, watering_plants_v2(vec![7,7,7,7,7,7,7], 8));
    assert_eq!(0, watering_plants(vec![], 1));
    assert_eq!(30, watering_plants_v2(vec![1,1,1,4,2,3], 4));
  }
}