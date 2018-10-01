# Add Queue Item sample

1. Edit `config.json`
2. Install dependencies `npm install`
3. Execute `node index.js`

### Expected output

```
Response: { '@odata.context': 'https://platform.uipath.com/odata/$metadata#queueItem/$entity',
  QueueDefinitionId: 1234,
  OutputData: null,
  Status: 'New',
  ReviewStatus: 'None',
  ReviewerUserId: null,
  Key: '44444444-8888-4444-aaaa-aaaaaaaaaaaa',
  Reference: null,
  ProcessingExceptionType: null,
  DueDate: null,
  Priority: 'High',
  DeferDate: null,
  StartProcessing: null,
  EndProcessing: null,
  SecondsInPreviousAttempts: 0,
  AncestorId: null,
  RetryNumber: 0,
  SpecificData: '{"DynamicProperties":{"someStr":"Example of arbitrary string value","someNumber":1234567890,"someBoolean":false,"someNull":null}}',
  CreationTime: '2018-05-01T01:23:45.6789012Z',
  Progress: null,
  RowVersion: 'AAAAAACmqD8=',
  Id: 1234567,
  ProcessingException: null,
  SpecificContent:
   { someStr: 'Example of arbitrary string value',
     someNumber: 1234567890,
     someBoolean: false,
     someNull: null },
  Output: null }
```

### Reference
For more details on how to create queue items, see the online documentation:
https://orchestrator.uipath.com/v2018.1/reference#section-adding-a-queue-item