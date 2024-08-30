Date - 2024-08-29  |  Time - 12:46
Tags: #Characteristics

----
## Table of Contents

1. [Availability](#availability)
2. [Reliability](#reliablitiy)
3. [Scalability](#scalability)
4. [Maintainability](#Maintainability)
5. [Fault Tolerance](#fault-tolerance)

----

### Availability

This is the **Percentage of time the system is accessible**.


> [!NOTE] Fromula
> A = (Total time - Amount of time service is down)/total time * 100;

| Availability Percentages versus Service Downtime |                       |                        |                       |
| ------------------------------------------------ | --------------------- | ---------------------- | --------------------- |
| **Availability %**                               | **Downtime per Year** | **Downtime per Month** | **Downtime per Week** |
| 90% (1 nine)                                     | 36.5 days             | 72 hours               | 16.8 hours            |
| 99% (2 nines)                                    | 3.65 days             | 7.20 hours             | 1.68 hours            |
| 99.5% (2 nines)                                  | 1.83 days             | 3.60 hours             | 50.4 minutes          |
| 99.9% (3 nines)                                  | 8.76 hours            | 43.8 minutes           | 10.1 minutes          |
| 99.99% (4 nines)                                 | 52.56 minutes         | 4.32 minutes           | 1.01 minutes          |
| 99.999% (5 nines)                                | 5.26 minutes          | 25.9 seconds           | 6.05 seconds          |
| 99.9999% (6 nines)                               | 31.5 seconds          | 2.59 seconds           | 0.605 seconds         |
| 99.99999% (7 nines)                              | 3.15 seconds          | 0.259 seconds          | 0.0605 seconds        |


### Reliability

This is the **probability of a system on its performance for a specified time**. 

*Mean Time between failures* = (total elapsed time - sum of downtime)/total failures

mean time to repair = total maintenance time / total number of repairs

