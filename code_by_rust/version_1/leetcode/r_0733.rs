/**
 * 有一幅以 m x n 的二维整数数组表示的图画 image ，其中 image[i][j] 表示该图画的像素值大小。
 * 你也被给予三个整数 sr ,  sc 和 newColor 。你应该从像素 image[sr][sc] 开始对图像进行 上色填充 。
 * 为了完成 上色工作 ，从初始像素开始，记录初始坐标的 上下左右四个方向上 像素值与初始坐标相同的相连像素点，接着再记录这四个方向上符合条件的像素点与他们对应 四个方向上 像素值与初始坐标相同的相连像素点，……，重复该过程。将所有有记录的像素点的颜色值改为 newColor 。
 * 最后返回 经过上色渲染后的图像 。
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/flood-fill
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
pub fn flood_fill(image: Vec<Vec<i32>>, sr: i32, sc: i32, new_color: i32) -> Vec<Vec<i32>> {
    let mut image = image;
    let (r, c) = (sr as usize, sc as usize);
    if image[r][c] == new_color {
        return image;
    }
    let mut stk = vec![];
    let old_color = image[r][c];
    image[r][c] = new_color;
    stk.push((r, c));
    while !stk.is_empty() {
        let (r, c) = stk.pop().unwrap();
        for (i, j) in [(r + 1, c), (r - 1, c), (r, c + 1), (r, c - 1)] {
            if i < image.len() && j < image[0].len() && image[i][j] == old_color {
                image[i][j] = new_color;
                stk.push((i, j));
            }
        }
    }
    image
}
