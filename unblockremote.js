var body = $response.body;
body = '\/*\n@supported A2F99CDB1FCC\n*\/\n' + body;

$done(body);
