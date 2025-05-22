var merge = function (nums1, m, nums2, n) {
  let index_nums1 = 0;
  let index_nums2 = 0;
  while (index_nums1 < m && index_nums2 < n) {
    if (nums1[index_nums1] > nums2[index_nums2]) {
      for (let i = m; i > index_nums1; i--) {
        nums1[i] = nums1[i - 1];
      }
      nums1[index_nums1] = nums2[index_nums2];
      index_nums2++;
      m++;
    }
    index_nums1++;
  }
  if (index_nums2 < n) {
    for (let i = index_nums2; i < n; i++) {
      nums1[m] = nums2[i];
      m++;
    }
  }
};

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
merge([1], 1, [], 0);
merge([0], 0, [1], 1);
merge([2, 0], 1, [1], 1);
merge([-1, 0, 0, 3, 3, 3, 0, 0, 0], 6, [1, 2, 2], 3);
merge([4, 5, 6, 0, 0, 0], 3, [1, 2, 3], 3);
merge([-1, -1, 0, 0, 0, 0], 4, [-1, 0], 2);
