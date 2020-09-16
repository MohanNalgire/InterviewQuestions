# Angular code questions

**1 Which of the following will work correctly, why it will work?**  

OPtions:  
1

```typescript
client.get('/foo', {responseType: 'text'})
```

2

```typescript
const options = {
  responseType: 'text',
};
client.get('/foo', options)  
```

The type response options are string unions, rather than plain strings.

In the second case, TypeScript infers the type of options to be {responseType: string}. The type is too wide to pass to HttpClient.get which is expecting the type of responseType to be one of the specific strings. HttpClient is typed explicitly this way so that the compiler can report the correct return type based on the options you provided.

Use as const to let TypeScript know that you really do mean to use a constant string type:

```Typescript
const options = {
  responseType: 'text' as const,
};
client.get('/foo', options);
```
