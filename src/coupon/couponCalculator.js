// 优惠券计算模块（Bob 的 develop 修改）
function calculateCoupon(amount, userLevel) {
  // PM-Bob 改了这行代码
  let discount = amount * 0.2; 
  
  return amount - discount;
}
module.exports = { calculateCoupon };
