import Mock from "mockjs";

Mock.setup({
  timeout: '500-1000'
});

const Random = Mock.Random;

Random.extend({
  row_id: () => Random.guid(),
  title: () => Random.cname(),
  process: () => Random.sentence(),
  start_date: () => Random.date(),
  end_date: () => Random.date(),
});

Mock.mock("/search", function() {
  return Mock.mock({
    'list|100': [
      {
        id: "@row_id",
        title: "@title",
        process: "@process",
        start_date: "@start_date",
        end_date: "@end_date"
      }
    ]
  }).list;
});

// Mock.mock('/update', 'POST', function() {

// });

// Mock.mock('/delete', 'DELETE', function() {

// });

// Mock.mock('/create', 'PUT', function() {

// });