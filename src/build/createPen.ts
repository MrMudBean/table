import { isBusinessEmptyString, isType, isUndefined } from '@vvi/is';
import { ColoredTableCommon } from '../types';
import { pen } from '@vvi/pen';

/**  默认的笔  */
export function createPen(options: unknown) {
  let defaultPen = pen;
  if (isType<ColoredTableCommon>(options)) {
    if (options.bold) defaultPen = defaultPen.bold;
    if (
      !isBusinessEmptyString(options.bgColor) &&
      !isUndefined(options.bgColor)
    )
      defaultPen = defaultPen.bgColor(options.bgColor);
    if (!isBusinessEmptyString(options.color) && !isUndefined(options.color))
      defaultPen = defaultPen.color(options.color);
    if (options.italic) defaultPen = defaultPen.italic;
    if (options.underline) defaultPen = defaultPen.underline;
  }

  return defaultPen;
}
