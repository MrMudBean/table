import { redPen } from '@mudbean/pen';
import { ColoredTableGlobalData, Table } from '..';

ColoredTableGlobalData.bold = true;
ColoredTableGlobalData.color = '#f0';

const table = new Table({
  body: [
    {
      data: [1, 8, '1', 3, 5, 7],
      color: '#0f5',
      underline: true,
      bold: true,
    },
  ],
});

table.addRow(['kadhs ', 12, '好😐', 123]);
table.addRow(['kadhs ', 12, '好😐😐', 123]);
table.addRow(['kadhs ', 12, '好😐😐😐', 123]);
table.addRow(['kadhs ', 12, '好😐😐😐😐', 123]);
table.addRow(['kadhs ', 12, '好😐😐😐😐😐', 123]);
table.addRow(['kadhs ', 12, '好😐😐😐😐😐😐', 123]);
table.addRow(['kadhs ', 12, '好😐😐😐😐😐😐😐', 123]);
table.addRow(['kadhs ', 12, '好😐😐😐😐😐😐😐🌹好0', 123]);
table.addRow(['kadhs ', 12, '好', 123]);
table.addRow(['kadhs ', 12, '好的', 123]);
table.addRow(['kadhs ', 12, '好豅的呀', 23]);
table.addRow(['kadhs ', 12, '好的呀隴摁', 23]);
table.addRow(['kadhs ', 12, '好的呀😐摁欧', 123]);
table.addRow(['kadhs ', 12, '好的呀😂摁欧嗯', 123]);
table.addRow(['kadhs ', 12, `好的呀${redPen`咿呀\n咿呀呦`}摁欧嗯得`, 123]);
table.addRow(['kadhs ', 12, '好的呀摁欧嗯得哈', 123]);
table.addRow([
  'kadhs ',
  12,
  '好的呀摁欧嗯得一哈好的呀摁欧嗯得一哈好的呀摁欧嗯得一哈好的呀摁欧嗯得一哈',
  123,
]);
table.setHeader(['eat', 'sleep and papapap', 'xxx']);

table.setFontSize(12);

table();
