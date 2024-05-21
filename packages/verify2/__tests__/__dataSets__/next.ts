export default [
  {
    label: 'advance to next workflow',
    request: [
      '/v2/verify/091e717f-8715-41a0-a3f0-cc04912deaa1/next_workflow',
      'POST',
    ],
    response: [200],
    method: 'post',
    clientMethod: 'nextWorkflow',
    parameters: ['091e717f-8715-41a0-a3f0-cc04912deaa1'],
    expected: undefined,
  },
];
