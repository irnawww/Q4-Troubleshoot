function getTotalUsageMB(records) {
  return records.reduce(
    (total, record) => total + record.dataUsageMB,
    0
  );
}

// Test
const records = [
  { dataUsageMB: 100 },
  { dataUsageMB: 250 },
  { dataUsageMB: 150 }
];

console.log(getTotalUsageMB(records));
// Expected output: 500