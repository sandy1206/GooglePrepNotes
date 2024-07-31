# Distributed Cache

## Table Of Contents

1. Writing Policies
2. Eviction Policies
3. Cache Invalidation
4. Storage Mechanism
5. Cache Client
6. Designing Distributed Cache

---

### Writing Policies

> When we write a data or store it in the main question is where do we store it in **Cache** or **DB**.
> short answer is it depends, based on requirements.

- **Write-through cache**: The write-through mechanism writes on the cache as well as on the database. Writing on both storages can happen concurrently or one after the other. This increases the write latency but ensures strong consistency between the database and the cache.
- **Write-back cache**: In the write-back cache mechanism, the data is first written to the cache and asynchronously written to the database. Although the cache has updated data, inconsistency is inevitable in scenarios where a client reads stale data from the database. However, systems using this strategy will have small writing latency.
- **Write-around cache**: This strategy involves writing data to the database only. Later, when a read is triggered for the data, it’s written to cache after a cache miss. The database will have updated data, but such a strategy isn’t favorable for reading recently updated data.

---

### Eviction Policy

> The Primary point of having cache is to keep it small, so keep it small we need to remove cache which is not used or not valid, how do we determine depends on lot of things.

There are several methods to determine cache eviction here are some common-one

- Least recently Used
- Most recently Used
- Least frequently used
- Most Frequently used

---

### Cache invalidation

> Cache can be removed to make a space but some cache data maybe outdated or stale which is not **Valid** so we need to remove that data

We can use two different approaches to deal with outdated items using TTL

- **Active expiration**: This method actively checks the TTL of cache entries through a daemon process or thread.
- **Passive expiration**: This method checks the TTL of a cache entry at the time of access.

---

### Storage Mechanism

> When we have Mutltiple server for cache it is important for us to decide which server we will store our cache and how to define that process

We can use below methods to decide that

1. Hash Function
2. Linked list

---

### Designing Distributed Cache

- **Functional Requirements**:
  - Insert Data
  - Retrieve Data
- **Non-functional requirements**:
  - High Performance
  - Salability
  - High Availability
  - Consistency
  - Affordability
- **API call**
  - ```js
    insert(key, data)
    get(key)
    ```

- **Architecture Diagram**
	![image info](../../../public/distrubuted%20cache.drawio.png)
