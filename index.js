// index.js

import fs from 'fs';

const [,, inputFilePath, outputFilePath] = process.argv;

if (!inputFilePath || !outputFilePath) {
  console.error('Usage: node index.js <input.json> <output.csv>');
  process.exit(1);
}

fs.readFile(inputFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error(`Error reading input file: ${err.message}`);
    process.exit(1);
  }

  let jsonData;
  try {
    jsonData = JSON.parse(data);
  } catch (e) {
    console.error(`Error parsing JSON: ${e.message}`);
    process.exit(1);
  }

  const csvData = jsonToCsv(jsonData);

  fs.writeFile(outputFilePath, csvData, 'utf8', (err) => {
    if (err) {
      console.error(`Error writing output file: ${err.message}`);
      process.exit(1);
    } else {
      console.log(`CSV file has been saved to ${outputFilePath}`);
    }
  });
});

function jsonToCsv(jsonData) {
  const equipmentList = jsonData.ProcessEquipmentDataPrimaryScope.EquipmentList;

  const headers = [
    'EquipmentID',
    'EquipmentName',
    'Manufacturer',
    'Model',
    'Capacity',
    'Length',
    'Width',
    'Height',
    'Weight',
    'Notes',
    'MaintenanceHistory'
  ];

  const csvRows = [];
  csvRows.push(headers.join(','));

  equipmentList.forEach(equipment => {
    const row = [];
    row.push(csvEscape(equipment.EquipmentID));
    row.push(csvEscape(equipment.EquipmentName));
    row.push(csvEscape(equipment.Manufacturer));
    row.push(csvEscape(equipment.Model));
    row.push(csvEscape(equipment.Capacity));

    // Dimensions
    const dimensions = equipment.Dimensions || {};
    row.push(csvEscape(dimensions.Length || ''));
    row.push(csvEscape(dimensions.Width || ''));
    row.push(csvEscape(dimensions.Height || ''));

    row.push(csvEscape(equipment.Weight));
    row.push(csvEscape(equipment.Notes));

    // MaintenanceHistory
    const maintenanceHistory = equipment.MaintenanceHistory || [];
    const maintenanceHistoryString = '[' + maintenanceHistory.map(entry => {
      return `${entry.date} ${entry.type}: ${entry.description}`;
    }).join(' | ') + ']';
    row.push(csvEscape(maintenanceHistoryString));

    csvRows.push(row.join(','));
  });

  return csvRows.join('\n');
}

function csvEscape(field) {
  if (field == null) {
    return '';
  }
  field = String(field);
  if (field.includes('"')) {
    field = field.replace(/"/g, '""');
  }
  if (field.includes(',') || field.includes('"') || field.includes('\n') || field.includes('\r')) {
    field = `"${field}"`;
  }
  return field;
}
