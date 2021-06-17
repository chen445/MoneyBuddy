import {purchasePoint} from '../util/purchase_api_util'
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

export const purchasePoint = (icon_id) => (dispatch) =>
  purchasePoint({ icon_id, point: 5 }).then(
    () => dispatch(purchaseIcons({ icon_id, point })),
    (err) => dispatch(receivePurchaseIconError({error: "purchase fails"}))
  );

