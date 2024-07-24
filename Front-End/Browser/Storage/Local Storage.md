Local Storage is a key-value storage mechanism provided by the Web Storage API that allows web applications to store data in a web browser.

Local storage provide an option to store the data and keep the data persistent even when browser is closed and reopened. 

Data stored in local storage is scoped to domain, port and protocol and can not be accessed by others

**GetData**
```js
const value = localStorage.getItem('key');
```

**SetData**
```js
localStorage.setItem('key', 'value');
```

**Delete**
```js
localStorage.removeItem('key');
```

**Limitations**

1. **Security**: data stored is not encrypted and can be accessed by JavaScript
2. **Performance**: read and write are synchronous so performance issue might occur

**Use Cases**
1. **Storing User Preferences**: Preferences like theme settings, language preferences, etc.
2. **Application State**: Storing the state of an application to maintain continuity across sessions.
3. **Offline Data**: Caching data for offline use, though [[IndexedDB]] is generally preferred for complex offline data storage.