// Triggers Semgrep (eval is evil)
var input = "console.log('hack')";
eval(input);

// Triggers Gitleaks (fake AWS key)
var aws_key = "AKIAIOSFODNN7EXAMPLE";
