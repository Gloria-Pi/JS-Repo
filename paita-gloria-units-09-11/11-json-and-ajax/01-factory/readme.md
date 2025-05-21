# 01 Factory

# Author
**Author**: Gloria Paita  
**Email**: gloria.paita@edu-its.it  
**Course**: Web Developer 2024-2026  

<br>

# Assignment

- Write `car.json`, a JSON that represents a car object
  - Make your object complete, having at least one property of the following types
  - Number, String, Boolean, Array, Object, Null
- Write a `factory.json` that represents a car factory
  - Follow the same rules above
- Transform `car.json` into `cars.json` with 5 cars
- Cars should belong to a factory
  - Write two variants of `factory.json`
  - One that has cars directly embedded in the factory JSON structure
  - Another that uses cars referring to their IDs

<br>
<br>

# Approach to Solution  

# Car & Factory JSON Structure

This project defines a simple data model for representing cars and car factories using JSON.

It includes single car records, a collection of cars, and two different representations of how a factory can be related to its cars.

## Files Overview

### `car.json`
- Represents a **single car object**.
- Contains various data types:
  - `Number`: e.g., `year`, `price`, `mileage`
  - `String`: e.g., `make`, `model`
  - `Boolean`: e.g., `isElectric`, `insurance.isPaid`
  - `Array`: e.g., `features`, `previousOwners`
  - `Object`: e.g., `insurance`
  - `Null`: used for `previousOwners` if there are none

This file can be used as a template or building block for creating car inventories.

### `cars.json`
- An **array of car objects** (currently 5).
- Each car has a unique `id` (like `car01`, `car02`...) to support referencing.
- Useful for representing a fleet or inventory list.

<br>

## Factory JSON Files

### `factory-embedded.json` – **Embedded Car Data**
- This file contains the full **car objects embedded directly** within the factory.
- All car information is stored inline under the `cars` property.
- **Advantages**:
  - Easy to access and display all car details in one place
  - No need for external lookups
- **Trade-offs**:
  - Data duplication if the same car appears in multiple contexts
  - Harder to update cars independently

#### Structure:
```json
{
    "name": "RocketFueled Car Lab",
    "location": "Spaceport City, Alola",
    "establishedYear": 2012,
    "isOperating": true,
    "totalEmployees": 1080,
    "annualRevenue": 48000000,
    "facilities": {
        "assemblyLine": "The HyperLoop",
        "paintShop": "ColorBlaster 5000",
        "qualityControl": "The TestZone"
    },
    "motto": "We don’t just make cars, we make history!",
    "cars": [
        {
            "carId": "car01",
            "make": "Pikachu Motors",
            "model": "Thunderbolt",
            "year": 2018,
            "price": 18000,
            "isElectric": true,
            "features": [
                "Bluetooth",
                "Remote Start",
                "Backup Camera",
                "Heated Seats"
            ],
            "insurance": {
                "company": "Kanto Insurance",
                "policyNumber": "KA234567890",
                "expiryDate": "2025-04-10",
                "isPaid": true
            },
            "previousOwners": null,
            "mileage": 0
        },
        (...)
        }
    ]
}

```
<br>

### `factory-id.json` – **Car ID References**
- Instead of embedding full car data, this file stores only a list of car IDs under the carIds property.  
- The car data is assumed to live separately (e.g., in cars.json or a database).

- **Advantages**:

  - More scalable

  - Cleaner separation of data (normalization)

  - Easier to manage updates to cars independently

- **Trade-offs**:

  - Requires additional logic or lookups to fetch full car details

#### Structure:
```json
{
    "name": "RocketFueled Car Lab",
    "location": "Spaceport City, Alola",
    "establishedYear": 2012,
    "isOperating": true,
    "totalEmployees": 1080,
    "annualRevenue": 48000000,
    "facilities": {
        "assemblyLine": "The HyperLoop",
        "paintShop": "ColorBlaster 5000",
        "qualityControl": "The TestZone"
    },
    "motto": "We don’t just make cars, we make history!",
    "carIds": [
        "car01",
        "car02",
        "car03",
        "car04",
        "car05"
    ]
}
```