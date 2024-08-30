Date - 2024-08-29  |  Time - 10:42
Tags: #System-Design

----
## Table of Contents

1. [Approach](#Approach)
2. [Back of the Envelope](#back-of-the-envelope)
3. [[Characteristics]]
4. [[Building Blocks]]
	1. [[Load Balancer]]
5. [[Designs]]

----

### Approach

This is important point in which we should lay out plan of attack so we can divide the problem into smaller chunks and then attack one by one.

1. **Determine system requirements and constraints**
2. **Recognize components**
3. **Generate design**
4. **Identify shortcomings in the initial design**
5. **Discuss trade-offs and improve iteratively**

### Back of the Envelope

- [I] Always keep calculations simple take values in 100s, and do not take random values like 435 or something like this.
- [I] **Three Zeros**

|          | Traffic     | Storage |
| -------- | ----------- | ------- |
| 3 Zeros  | Thousands   | kb      |
| 6 Zeros  | Millions    | MB      |
| 9 zeros  | Billions    | GB      |
| 12 zeros | Trillions   | TB      |
| 15 zeros | Qutrillions | PB      |

- [I] **Values**

| ASCII Char    | 2 byte |
| ------------- | ------ |
| UNICODE Char  | 2 byte |
| Long / Double | 8 byte |
| Image         | 300kb  |

- [I] Things to calculate 
	1. No of servers
	2. RAM
	3. Storage capacity

- [I] Formula
	X million users * 2KB = x * 2 GB 
	so the basically we will add zeros from left and zeros from right