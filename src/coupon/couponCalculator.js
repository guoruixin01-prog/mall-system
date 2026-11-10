// 优惠券计算模块（Alice 开发版）
function calculateCoupon(amount, userLevel) {
  let discount = amount * 0.15; 
  if (userLevel === 'gold') {
    discount += 10;
  }
  return amount - discount;
}
module.exports = { calculateCoupon };