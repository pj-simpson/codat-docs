module.exports = [
  {
    type: "link",
    href: "/",
    label: "All Docs",
    className: "back",
  },
  {
    type: "link",
    label: "Accounting API",
    href: "/accounting-api/overview",
    className: "header",
  },
  {
    type: "category",
    label: "Guides",
    collapsed: true,
    items: [
      {
        type: "category",
        label: "Bill pay",
        collapsed: true,
        items: [
          "accounting-api/guides/bill-pay/introduction",
          "accounting-api/guides/bill-pay/use-bill-pay-demo-app",
          "accounting-api/guides/bill-pay/run-demo-app-locally",
          "accounting-api/guides/bill-pay/how-the-demo-app-works",
        ],
      },
    ],
  },
  {
    type: "link",
    label: "Accounting data model",
    href: "/data-model/accounting/",
  },
  {
    type: "link",
    label: "Accounting integrations",
    href: "/integrations/accounting/overview",
  },
  {
    type: "link",
    href: "/accounting-api",
    label: "Accounting API reference",
  },
];