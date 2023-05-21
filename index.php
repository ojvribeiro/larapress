<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>
    <?= get_bloginfo('name'); ?>
  </title>

  <style>
    html,
    body,
    body>[data-larapress-app] {
      height: 100%;
      margin: 0;
    }
  </style>
</head>

<body class="h-full">
  <div data-larapress-app></div>

  <script src="<?= get_template_directory_uri() . '/public/assets/js/manifest.js'; ?>"></script>
  <script src="<?= get_template_directory_uri() . '/public/assets/js/vendor.js'; ?>"></script>
  <script src="<?= get_template_directory_uri() . '/public/assets/js/app.js'; ?>"></script>
</body>

</html>
