
      $(document).ready(function() {
        $('.data-select').change(function() {
          let selectedOption = $(this).val();
          let url = 'https://jsonplaceholder.typicode.com/' + selectedOption;
  
          $.get(url, function(data) {
            let result = '';
  
            data.forEach(function(item) {
              if (selectedOption === 'posts') {
                result += '<p><b>Title:</b> ' + item.title + '</p>';
                result += '<p><b>Body:</b> ' + item.body + '</p>';
                result += '<p><b>User ID:</b> ' + item.userId + '</p>';
              } else if (selectedOption === 'comments') {
                result += '<p><b>Name:</b> ' + item.name + '</p>';
                result += '<p><b>Email:</b> ' + item.email + '</p>';
                result += '<p><b>Body:</b> ' + item.body + '</p>';
              } else if (selectedOption === 'albums') {
                result += '<p><b>Title:</b> ' + item.title + '</p>';
                result += '<p><b>User ID:</b> ' + item.userId + '</p>';
              } else if (selectedOption === 'photos') {
                result += '<p><b>Title:</b> ' + item.title + '</p>';
                result += '<p><b>URL:</b> ' + item.url + '</p>';
                result += '<p><b>Thumbnail URL:</b> ' + item.thumbnailUrl + '</p>';
              } else if (selectedOption === 'todos') {
                result += '<p><b>Title:</b> ' + item.title + '</p>';
                result += '<p><b>Completed:</b> ' + item.completed + '</p>';
                result += '<p><b>User ID:</b> ' + item.userId + '</p>';
              } else if (selectedOption === 'users') {
                result += '<p><b>Name:</b> ' + item.name + '</p>';
                result += '<p><b>Email:</b> ' + item.email + '</p>';
                result += '<p><b>Username:</b> ' + item.username + '</p>';
              }
  
              result += '<hr>';
            });
  
            $('.result').html(result);
          });
        });
      });
    