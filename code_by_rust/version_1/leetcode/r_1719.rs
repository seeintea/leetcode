use std::collections::{HashMap, HashSet};

/**
 * https://leetcode-cn.com/problems/number-of-ways-to-reconstruct-a-tree/
 * 给你一个数组 pairs ，其中 pairs[i] = [xi, yi] ，并且满足：
 * pairs 中没有重复元素
 * xi < yi
 * 令 ways 为满足下面条件的有根树的方案数：
 * 树所包含的所有节点值都在 pairs 中。
 * 一个数对 [xi, yi] 出现在 pairs 中 当且仅当 xi 是 yi 的祖先或者 yi 是 xi 的祖先。
 * 注意：构造出来的树不一定是二叉树。
 * 两棵树被视为不同的方案当存在至少一个节点在两棵树中有不同的父节点。
 * 请你返回：
 * 如果 ways == 0 ，返回 0 。
 * 如果 ways == 1 ，返回 1 。
 * 如果 ways > 1 ，返回 2 。
 * 一棵 有根树 指的是只有一个根节点的树，所有边都是从根往外的方向。
 * 我们称从根到一个节点路径上的任意一个节点（除去节点本身）都是该节点的 祖先 。根节点没有祖先。
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/number-of-ways-to-reconstruct-a-tree
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/
pub fn check_ways(pairs: Vec<Vec<i32>>) -> i32 {
    let mut child_map: HashMap<i32, HashSet<i32>> = HashMap::new();
    for p in pairs.iter() {
        let (p0, p1) = (p[0], p[1]);
        child_map.entry(p0).or_default().insert(p1);
        child_map.entry(p1).or_default().insert(p0);
    }
    let mut root = -1;
    for (node, child) in child_map.iter() {
        if child.len() == child_map.len() - 1 {
            root = *node;
            break;
        }
    }

    let mut ret = 0;
    if root == -1 {
        return ret;
    }
    ret = 1;
    for (node, child) in child_map.iter() {
        if *node == root {
            continue;
        }
        let cur_degree = child.len();
        let mut parent = -1;
        let mut parent_degree = usize::MAX;
        for c in child {
            if child_map[c].len() < parent_degree && cur_degree <= child_map[c].len() {
                parent = *c;
                parent_degree = child_map[c].len();
            }
        }
        if parent == -1 {
            return 0;
        }
        for c in child {
            if *c == parent {
                continue;
            }
            if !child_map[&parent].contains(c) {
                return 0;
            }
        }
        if parent_degree == cur_degree {
            ret = 2;
        }
    }
    ret
}

#[cfg(test)]
mod tests {
    use super::check_ways;
    #[test]
    fn test_check_ways() {
        assert_eq!(1, check_ways(vec![vec![1, 2], vec![2, 3]]));
        assert_eq!(
            0,
            check_ways(vec![vec![1, 2], vec![2, 3], vec![2, 4], vec![1, 5]])
        );
        assert_eq!(
            0,
            check_ways(vec![
                vec![1, 3],
                vec![7, 11],
                vec![11, 14],
                vec![13, 14],
                vec![3, 14],
                vec![7, 15],
                vec![3, 10],
                vec![3, 7],
                vec![11, 12],
                vec![3, 9],
                vec![7, 8],
                vec![1, 7],
                vec![5, 6],
                vec![13, 15],
                vec![6, 7],
                vec![7, 13],
                vec![3, 6],
                vec![3, 5],
                vec![5, 9],
                vec![9, 13],
                vec![12, 14],
                vec![7, 10],
                vec![8, 9],
                vec![9, 15],
                vec![5, 14],
                vec![1, 14],
                vec![6, 14],
                vec![8, 11],
                vec![9, 12],
                vec![10, 14],
                vec![4, 14],
                vec![2, 14],
                vec![5, 7],
                vec![1, 6],
                vec![2, 7],
                vec![8, 14],
                vec![9, 14],
                vec![6, 9],
                vec![14, 15],
                vec![7, 12],
                vec![9, 10],
                vec![9, 11],
                vec![1, 9],
                vec![7, 14],
                vec![8, 12]
            ])
        )
    }
}
