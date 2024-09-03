Date - 2024-09-03  |  Time - 10:00
Tags: #Cookie

----

Cookie is a small storage which is utilized by browser to store use related information. 
It has a limited storage and has to used efficiently.
browser may restrict user on how many cookies can be stored per site. 

different flags to make cookie secure

1. `httpOnly` - this allows to use cookie only in network call and not from javascript
2. `secure: true` - make use cookie only when using HTTPS. 
3. `expires` : set expiry of cookie
4. `samesite` - control how cookie will be sent during cross side request. 
5. `path` - specific to path only
6. `domain` - restrict to that domain only