/**
 * 客户端交互方法
 */

// 图片预览
export const clientPreviewImage = ({ currentindex, imgageurls }) => {
  console.log(currentindex, imgageurls);
  window.xyJSBridge && window.xyJSBridge.previewImage(JSON.stringify({
    currentindex,
    imgageurls
  }));
};

// 跳转项目详情页
export const clientOpenActivityDetail = ({ activityID }) => {
  window.xyJSBridge && window.xyJSBridge.openActivityDetail(JSON.stringify({
    activityID
  }));
};
