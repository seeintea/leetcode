/**
 * 我们有 n 栋楼，编号从 0 到 n - 1 。每栋楼有若干员工。由于现在是换楼的季节，部分员工想要换一栋楼居住。
 * 给你一个数组 requests ，其中 requests[i] = [fromi, toi] ，表示一个员工请求从编号为 fromi 的楼搬到编号为 toi 的楼。
 * 一开始 所有楼都是满的，所以从请求列表中选出的若干个请求是可行的需要满足 每栋楼员工净变化为 0 。意思是每栋楼 离开 的员工数目 等于 该楼 搬入 的员工数数目。比方说 n = 3 且两个员工要离开楼 0 ，一个员工要离开楼 1 ，一个员工要离开楼 2 ，如果该请求列表可行，应该要有两个员工搬入楼 0 ，一个员工搬入楼 1 ，一个员工搬入楼 2 。
 * 请你从原请求列表中选出若干个请求，使得它们是一个可行的请求列表，并返回所有可行列表中最大请求数目。
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/maximum-number-of-achievable-transfer-requests
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
pub fn maximum_requests(n: i32, requests: Vec<Vec<i32>>) -> i32 {
    let req_len = requests.len();
    let mut ret = 0;
    for r in 1..1 << req_len {
        let mut cur = 0;
        let mut tab = vec![0; n as usize];
        for i in 0..req_len {
            if r & (1 << i) != 0 {
                cur += 1;
                tab[requests[i][0] as usize] -= 1;
                tab[requests[i][1] as usize] += 1;
            }
        }
        if cur > ret && tab == vec![0; n as usize] {
            ret = cur;
        }
    }
    ret
}
