export interface NaviData {
  id: string;
  productCategory: {
    label: string;
    value: string;
  }[];
}

export const naviData: NaviData[] = [
  {
    id: "dog",
    productCategory: [
      {
        label: "food",
        value: "사료",
      },
      {
        label: "snack",
        value: "간식",
      },
      {
        label: "clean",
        value: "위생",
      },
      {
        label: "tableware",
        value: "급식기/급수기",
      },
      {
        label: "house",
        value: "집/울타리",
      },
      {
        label: "cloth",
        value: "의류/악세사리",
      },
    ],
  },
  {
    id: "cat",
    productCategory: [
      {
        label: "food",
        value: "사료",
      },
      {
        label: "snack",
        value: "캔",
      },
      {
        label: "clean",
        value: "위생",
      },
      {
        label: "tableware",
        value: "급식기/급수기",
      },
      {
        label: "house",
        value: "모래",
      },
      {
        label: "cloth",
        value: "의류/악세사리",
      },
    ],
  },
  {
    id: "small",
    productCategory: [
      {
        label: "food",
        value: "사료",
      },
      {
        label: "equipment",
        value: "기구",
      },
    ],
  },
];
