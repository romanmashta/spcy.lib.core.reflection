import { Module } from '../src';

test('Comply interface with refs', () => {
  const module: Module = {
    $defs: {
      location: {
        type: 'object',
        properties: {
          lat: {
            type: 'number'
          },
          lon: {
            type: 'number'
          }
        }
      },
      test: {
        type: 'object',
        properties: {
          firstName: {
            type: 'string'
          },
          lastName: {
            type: 'string'
          },
          location: {
            $ref: 'location'
          }
        }
      }
    }
  };
  expect(module).not.toBeNull();
});

test('Comply type with oneOf', () => {
  const module: Module = {
    $defs: {
      picture: {
        type: 'object',
        properties: {
          shapes: {
            type: 'array',
            items: {
              oneOf: [
                {
                  type: 'object',
                  properties: {
                    width: { type: 'number' },
                    height: { type: 'number' }
                  }
                },
                {
                  type: 'object',
                  properties: {
                    radius: { type: 'number' }
                  }
                }
              ]
            }
          }
        }
      }
    }
  };
  expect(module).not.toBeNull();
});

test('Comply interface with array', () => {
  const module: Module = {
    $defs: {
      location: {
        type: 'object',
        properties: {
          lat: {
            type: 'number'
          },
          lon: {
            type: 'number'
          }
        }
      },
      test: {
        type: 'object',
        properties: {
          locations: {
            type: 'array',
            items: {
              $ref: 'location'
            }
          },
          tags: {
            type: 'array',
            items: { type: 'string' }
          }
        }
      }
    }
  };
  expect(module).not.toBeNull();
});

test('Comply interface with const', () => {
  const module: Module = {
    $defs: {
      types: {
        oneOf: [{ const: 'one' }, { const: 'two' }]
      },
      test: {
        type: 'object',
        required: ['type', 'locations'],
        properties: {
          type: { const: 'test' },
          locations: {
            type: 'array',
            items: {
              $ref: 'location'
            }
          },
          tags: {
            type: 'array',
            items: { type: 'string' }
          }
        }
      }
    }
  };
  expect(module).not.toBeNull();
});
