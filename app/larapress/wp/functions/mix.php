<?php

function mix($path, $manifestDirectory = '')
{
  static $manifest;
  if ($manifestDirectory && strpos($manifestDirectory, '/') !== 0) {
    $manifestDirectory = "{$manifestDirectory}";
  }

  if (!$manifest) {
    $manifestPath = $manifestDirectory . '/mix-manifest.json';

    if (!file_exists($manifestPath)) {
      throw new Exception('The Mix manifest does not exist in '. $manifestPath .'.');
    }
    $manifest = json_decode(file_get_contents($manifestPath), true);
  }

  if (strpos($path, '/') !== 0) {
    $path = "/{$path}";
  }

  if (!array_key_exists($path, $manifest)) {
    throw new Exception(
      "Unable to locate Mix file: {$path}. Please check your " .
        'webpack.mix.js output paths and try again.'
    );
  }

  return file_exists($manifestDirectory . '/hot')
    ? "http://localhost:8080{$manifest[$path]}"
    : $manifest[$path];
}
