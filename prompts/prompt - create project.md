## context
 
You will write javascript to convert json to csv.  

## Constraints

### Technology Stack

- javascript es6
- nodejs 20.x
- type is module

- use imports
- main file named index.js.




## Examples

### package.json

```json
{
  "name": "json-to-csv-converter",
  "version": "1.0.0",
  "description": "A simple Node.js project to convert JSON data to CSV format",
  "main": "index.js",
  "type": "module",
  "scripts": {
    "start": "node index.js input.json output.csv"
  },
  "dependencies": {
    "@json2csv/plainjs": "^7.0.6"
  }
}

```


### input 
```json
{
  "ProcessEquipmentDataPrimaryScope": {
    "EquipmentList": [
      {
        "EquipmentID": "PMP-001",
        "EquipmentName": "Centrifugal Pump",
        "Manufacturer": "Grundfos",
        "Model": "CR 32-2",
        "Capacity": "30 m³/h",
        "Dimensions": {
          "Length": "850 mm",
          "Width": "400 mm",
          "Height": "600 mm"
        },
        "Weight": "125 kg",
        "Notes": "High-efficiency pump for process water circulation",
        "MaintenanceHistory": [
          {
            "date": "2024-01-15",
            "type": "Preventive",
            "description": "Bearing replacement"
          },
          {
            "date": "2023-08-20",
            "type": "Corrective",
            "description": "Seal replacement"
          }
        ]
      },
      {
        "EquipmentID": "HX-101",
        "EquipmentName": "Shell and Tube Heat Exchanger",
        "Manufacturer": "Alfa Laval",
        "Model": "T50-MFG",
        "Capacity": "500 kW",
        "Dimensions": {
          "Length": "3200 mm",
          "Width": "600 mm",
          "Height": "800 mm"
        },
        "Weight": "850 kg",
        "Notes": "Counter-flow heat exchanger for primary cooling",
        "MaintenanceHistory": [
          {
            "date": "2024-02-10",
            "type": "Preventive",
            "description": "Tube cleaning"
          }
        ]
      },
      {
        "EquipmentID": "TNK-201",
        "EquipmentName": "Storage Tank",
        "Manufacturer": "Endress+Hauser",
        "Model": "ST-5000",
        "Capacity": "5000 L",
        "Dimensions": {
          "Length": "2000 mm",
          "Width": "2000 mm",
          "Height": "3000 mm"
        },
        "Weight": "1200 kg",
        "Notes": "Stainless steel vertical storage tank",
        "MaintenanceHistory": [
          {
            "date": "2024-03-01",
            "type": "Inspection",
            "description": "Annual thickness testing"
          },
          {
            "date": "2023-09-15",
            "type": "Preventive",
            "description": "Interior coating renewal"
          }
        ]
      },
      {
        "EquipmentID": "FLT-301",
        "EquipmentName": "Basket Filter",
        "Manufacturer": "Eaton",
        "Model": "Model 72",
        "Capacity": "50 m³/h",
        "Dimensions": {
          "Length": "500 mm",
          "Width": "300 mm",
          "Height": "800 mm"
        },
        "Weight": "45 kg",
        "Notes": "Duplex basket strainer for particulate removal",
        "MaintenanceHistory": [
          {
            "date": "2024-01-05",
            "type": "Preventive",
            "description": "Basket replacement"
          }
        ]
      },
      {
        "EquipmentID": "VLV-401",
        "EquipmentName": "Control Valve",
        "Manufacturer": "Fisher",
        "Model": "GX Control Valve",
        "Capacity": "40 m³/h",
        "Dimensions": {
          "Length": "300 mm",
          "Width": "200 mm",
          "Height": "400 mm"
        },
        "Weight": "28 kg",
        "Notes": "Globe-style control valve with pneumatic actuator",
        "MaintenanceHistory": [
          {
            "date": "2024-02-20",
            "type": "Calibration",
            "description": "Actuator calibration"
          },
          {
            "date": "2023-11-10",
            "type": "Corrective",
            "description": "Stem packing replacement"
          }
        ]
      }
    ]
  }
}
```
### Output

EquipmentID,EquipmentName,Manufacturer,Model,Capacity,Length,Width,Height,Weight,Notes,MaintenanceHistory
PMP-001,Centrifugal Pump,Grundfos,CR 32-2,30 m³/h,850 mm,400 mm,600 mm,125 kg,High-efficiency pump for process water circulation,"[2024-01-15 Preventive: Bearing replacement | 2023-08-20 Corrective: Seal replacement]"
HX-101,Shell and Tube Heat Exchanger,Alfa Laval,T50-MFG,500 kW,3200 mm,600 mm,800 mm,850 kg,Counter-flow heat exchanger for primary cooling,"[2024-02-10 Preventive: Tube cleaning]"
TNK-201,Storage Tank,Endress+Hauser,ST-5000,5000 L,2000 mm,2000 mm,3000 mm,1200 kg,Stainless steel vertical storage tank,"[2024-03-01 Inspection: Annual thickness testing | 2023-09-15 Preventive: Interior coating renewal]"
FLT-301,Basket Filter,Eaton,Model 72,50 m³/h,500 mm,300 mm,800 mm,45 kg,Duplex basket strainer for particulate removal,"[2024-01-05 Preventive: Basket replacement]"
VLV-401,Control Valve,Fisher,GX Control Valve,40 m³/h,300 mm,200 mm,400 mm,28 kg,Globe-style control valve with pneumatic actuator,"[2024-02-20 Calibration: Actuator calibration | 2023-11-10 Corrective: Stem packing replacement]"


## Task

create a command line javascript function to perform this conversion

output the code and a shell script for running the javascript code.