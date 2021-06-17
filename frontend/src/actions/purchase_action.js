import * as APIicons from '../util/purchase_api_util'
export const PURCHASE_ICONS = "PURCHASE_ICONS";
export const PURCHASE_ICON_ERROR = "PURCHASE_ICON_ERROR";

export const purchaseIcons = (icon) => ({
  type: PURCHASE_ICONS,
  icon,
});

export const receivePurchaseIconError = (error) => ({
  type: PURCHASE_ICON_ERROR,
  error
});

const POINT_PER_ICON = 5
export const purchasePoint = (icon_id) => (dispatch) =>
  APIicons.purchasePoint({ icon_id, point: POINT_PER_ICON }).then(
    () => dispatch(purchaseIcons({ icon_id, point: POINT_PER_ICON })),
    (err) => dispatch(receivePurchaseIconError({ error: "purchase fails" }))
  );

