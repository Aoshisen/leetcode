function findMedianSortedArrays(nums1, nums2) {
  let merged = mergeArrays(nums1, nums2);
  let totalLength = merged.length;
  if (totalLength % 2 === 0) {
    return (merged[totalLength / 2 - 1] + merged[totalLength / 2]) / 2;
  } else {
    return merged[Math.floor(totalLength / 2)];
  }
}

function mergeArrays(nums1, nums2) {
  let merged = [];
  let i = 0;
  let j = 0;
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      merged.push(nums1[i]);
      i++;
    } else {
      merged.push(nums2[j]);
      j++;
    }
  }
  while (i < nums1.length) {
    merged.push(nums1[i]);
    i++;
  }
  while (j < nums2.length) {
    merged.push(nums2[j]);
    j++;
  }
  return merged;
}
