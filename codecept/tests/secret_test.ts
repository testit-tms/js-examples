Feature('Secret handling');

Scenario('Test secret masking', ({ I }) => {
  const secretValue = 'mySecretPassword123';
  I.say(`Filling field with secret value`);
  I.fillField('password', secret(secretValue));
});
