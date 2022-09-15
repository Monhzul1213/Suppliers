export const inventoryStates = [
  {key: 'active', label: 'Идэвхтэй'},
  {key: 'sent', label: 'Хүсэлт илгээсэн'},
  {key: 'rejected', label: 'Хүсэлт цуцалсан'},
  {key: 'accepted', label: 'Зөвшөөрсөн'},
  {key: 'inactive', label: 'Идэвхгүй'},
];

export const inventoryCategories = [
  {key: 'Пиво', label: 'Пиво'},
  {key: 'Архи', label: 'Архи'},
];

export const inventoryData = [
  {key: 1, BarCode: '4601501087628', ClassID:	'Пиво', Descr:	'Heineken Bottle 0.33 L', Price: 2650, status: 'Идэвхтэй'},
  {key: 2, BarCode: '4601501082623', ClassID:	'Пиво', Descr:	'Heineken Bottle 0.5 L', Price: 3330, status: 'Идэвхтэй'},
  {key: 2, BarCode: '4601501082623', ClassID:	'Пиво', Descr:	'Heineken Bottle 0.5 L', Price: 3330, status: 'Идэвхтэй'},
  {key: 2, BarCode: '4601501082623', ClassID:	'Пиво', Descr:	'Heineken Bottle 0.5 L', Price: 3330, status: 'Идэвхтэй'},
  {key: 2, BarCode: '4601501082623', ClassID:	'Пиво', Descr:	'Heineken Bottle 0.5 L', Price: 3330, status: 'Идэвхтэй'},
  {key: 2, BarCode: '4601501082623', ClassID:	'Пиво', Descr:	'Heineken Bottle 0.5 L', Price: 3330, status: 'Идэвхтэй'},
  {key: 3, BarCode: '4601501006629', ClassID:	'Архи', Descr:	'HKN Bundle Can 0.43 L 1/4 pack', Price: 14100, status: 'Хүсэлт илгээсэн'},
  {key: 4, BarCode: '8656020613014', ClassID:	'Архи', Descr:	'Tiger Bottle 0.33 L', Price: 1900, status: 'Идэвхтэй'},
  {key: 5, BarCode: '8656020613052', ClassID:	'Пиво', Descr:	'Sengur Bottle 0.45 L', Price: 2150, status: 'Хүсэлт илгээсэн'},
  {key: 6, BarCode: '8656020613052', ClassID:	'Пиво', Descr:	'Sengur Bottle 0.45 L', Price: 2151, status: 'Хүсэлт илгээсэн'},
  {key: 7, BarCode: '8656020613052', ClassID:	'Пиво', Descr:	'Sengur Bottle 0.45 L', Price: 2152, status: 'Идэвхтэй'},
  {key: 8, BarCode: '8656020613052', ClassID:	'Пиво', Descr:	'Sengur Bottle 0.45 L', Price: 2153, status: 'Хүсэлт цуцалсан'},
  {key: 9, BarCode: '8656020613052', ClassID:	'Пиво', Descr:	'Sengur Bottle 0.45 L', Price: 2154, status: 'Зөвшөөрсөн'},
  {key: 10, BarCode: '8656020613052', ClassID:	'Пиво', Descr:	'Sengur Bottle 0.45 L', Price: 2155, status: 'Зөвшөөрсөн'},
  {key: 11, BarCode: '8656020613052', ClassID:	'Пиво', Descr:	'Sengur Bottle 0.45 L', Price: 2156, status: 'Идэвхтэй'},
  {key: 12, BarCode: '8656020613052', ClassID:	'Пиво', Descr:	'Sengur Bottle 0.45 L', Price: 2157, status: 'Идэвхтэй'},
  {key: 13, BarCode: '8656020613052', ClassID:	'Пиво', Descr:	'Sengur Bottle 0.45 L', Price: 2158, status: 'Хүсэлт илгээсэн'},
  {key: 14, BarCode: '8656020613052', ClassID:	'Пиво', Descr:	'Sengur Bottle 0.45 L', Price: 2159, status: 'Идэвхтэй'},
  {key: 15, BarCode: '8656020613052', ClassID:	'Пиво', Descr:	'Sengur Bottle 0.45 L', Price: 2160, status: 'Идэвхгүй'},
  {key: 16, BarCode: '8656020613052', ClassID:	'Пиво', Descr:	'Sengur Bottle 0.45 L', Price: 2250, status: 'Хүсэлт илгээсэн'},
];

export const orderData = [
  {key: 1, OrderNo: 'PO1000001', SiteID: '1001', SiteAddr: 'Good Price - 1 /Хүүхдийн 100 /', OrderDate: '2022.03.16', OrderReqDate: '2022.03.18', TotalAmt: 625850, TotalQty: 140, Status: 'Захиалсан'},
  {key: 2, OrderNo: 'PO1000002', SiteID: '1001', SiteAddr: 'Good Price - 1 /Хүүхдийн 100 /', OrderDate: '2022.03.16', OrderReqDate: '2022.03.18', TotalAmt: 2500000, TotalQty: 750, Status: 'Захиалсан'},
  {key: 3, OrderNo: 'PO1000003', SiteID: '1002', SiteAddr: 'Good Price - 2 /Хүүхдийн 100 /', OrderDate: '2022.03.16', OrderReqDate: '2022.03.18', TotalAmt: 1400000, TotalQty: 700, Status: 'Захиалсан'},
  {key: 4, OrderNo: 'PO1000004', SiteID: '1001', SiteAddr: 'Good Price - 1 /Хүүхдийн 100 /', OrderDate: '2022.03.16', OrderReqDate: '2022.03.18', TotalAmt: 1600000, TotalQty: 540, Status: 'Хүчингүй'},
  {key: 5, OrderNo: 'PO1000005', SiteID: '1001', SiteAddr: 'Good Price - 1 /Хүүхдийн 100 /', OrderDate: '2022.03.16', OrderReqDate: '2022.03.18', TotalAmt: 1580000, TotalQty: 520, Status: 'Хүчингүй'},
  {key: 6, OrderNo: 'PO1000006', SiteID: '1002', SiteAddr: 'Good Price - 2 /Хүүхдийн 100 /', OrderDate: '2022.03.16', OrderReqDate: '2022.03.18', TotalAmt: 3507000, TotalQty: 510, Status: 'Захиалсан'},
  {key: 7, OrderNo: 'PO1000007', SiteID: '1001', SiteAddr: 'Good Price - 1 /Хүүхдийн 100 /', OrderDate: '2022.03.16', OrderReqDate: '2022.03.18', TotalAmt: 1204000, TotalQty: 510, Status: 'Орлого авсан'},
  {key: 8, OrderNo: 'PO1000008', SiteID: '1003', SiteAddr: 'Good Price - 3 /Хүүхдийн 100 /', OrderDate: '2022.03.16', OrderReqDate: '2022.03.18', TotalAmt: 590000, TotalQty: 190, Status: 'Захиалсан'},
  {key: 9, OrderNo: 'PO1000009', SiteID: '1004', SiteAddr: 'Good Price - 4 /Хүүхдийн 100 /', OrderDate: '2022.03.16', OrderReqDate: '2022.03.18', TotalAmt: 890000, TotalQty: 260, Status: 'Орлого авсан'},
  {key: 10, OrderNo: 'PO10000010', SiteID: '1002', SiteAddr: 'Good Price - 2 /Хүүхдийн 100 /', OrderDate: '2022.03.16', OrderReqDate: '2022.03.18', TotalAmt: 1600000, TotalQty: 800, Status: 'Хүчингүй'},
  {key: 11, OrderNo: 'PO10000011', SiteID: '1002', SiteAddr: 'Good Price - 2 /Хүүхдийн 100 /', OrderDate: '2022.03.16', OrderReqDate: '2022.03.18', TotalAmt: 2300000, TotalQty: 920, Status: 'Захиалсан'},
  {key: 12, OrderNo: 'PO10000012', SiteID: '1004', SiteAddr: 'Good Price - 4 /Хүүхдийн 100 /', OrderDate: '2022.03.16', OrderReqDate: '2022.03.18', TotalAmt: 2150000, TotalQty: 570, Status: 'Орлого авсан'},
  {key: 13, OrderNo: 'PO10000013', SiteID: '1004', SiteAddr: 'Good Price - 4 /Хүүхдийн 100 /', OrderDate: '2022.03.16', OrderReqDate: '2022.03.18', TotalAmt: 1200000, TotalQty: 600, Status: 'Захиалсан'},
  {key: 14, OrderNo: 'PO10000014', SiteID: '1004', SiteAddr: 'Good Price - 4 /Хүүхдийн 100 /', OrderDate: '2022.03.16', OrderReqDate: '2022.03.18', TotalAmt: 1300000, TotalQty: 560, Status: 'Захиалсан'},
  {key: 15, OrderNo: 'PO10000015', SiteID: '1001', SiteAddr: 'Good Price - 1 /Хүүхдийн 100 /', OrderDate: '2022.03.16', OrderReqDate: '2022.03.18', TotalAmt: 680000, TotalQty: 170, Status: 'Захиалсан'},
  {key: 16, OrderNo: 'PO10000016', SiteID: '1003', SiteAddr: 'Good Price - 3 /Хүүхдийн 100 /', OrderDate: '2022.03.16', OrderReqDate: '2022.03.18', TotalAmt: 700000, TotalQty: 480, Status: 'Орлого авсан'},
];

export const orderDetail = [
  {OrderNo: 'PO1000001', BarCode: '4601501087628', Descr:	'Heineken Bottle 0.33 L', Qty: 20, Price: 2650, Amt: 53000, SuppQty: 20, SuppAmt: 53000},
  {OrderNo: 'PO1000001', BarCode: '4601501082623', Descr:	'Heineken Bottle 0.5 L', Qty: 20, Price: 3330, Amt: 66600, SuppQty: 20, SuppAmt: 66600},
  {OrderNo: 'PO1000001', BarCode: '4601501006629', Descr:	'HKN Bundle Can 0.43 L 1/4 pack', Qty: 25, Price: 14100, Amt: 352500, SuppQty: 30, SuppAmt: 423000},
  {OrderNo: 'PO1000001', BarCode: '8656020613014', Descr:	'Tiger Bottle 0.33 LL', Qty: 30, Price: 1900, Amt: 57000, SuppQty: 30, SuppAmt: 57000},
  {OrderNo: 'PO1000001', BarCode: '8656020613052', Descr:	'Sengur Bottle 0.45 L', Qty: 45, Price: 2150, Amt: 96750, SuppQty: 50, SuppAmt: 107500},
  {OrderNo: 'PO1000002', BarCode: '8656020613052', Descr:	'Sengur Bottle 0.45 L', Qty: 45, Price: 2150, Amt: 96750, SuppQty: 50, SuppAmt: 107500}
];

export const priceData = [
  {ReqDate:'2022.02.01',BarCode:'3546463334',Category:'Ус ундаа',Descr:'Оргилуун Лимон 0,5',PriceOld:1000,PriceNew:1200,Status:'Хэрэгжсэн',UseDate:'2022.02.10'},
  {ReqDate:'2022.03.16',BarCode:'4846463335',Category:'Ус ундаа',Descr:'Frutta Juice 1L',PriceOld:1500,PriceNew:1800,Status:'Хүсэлт илгээсэн',UseDate:'2022.04.01'},
];