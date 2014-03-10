/**
 * @fileoverview Tests for wrap-iife rule.
 * @author Ilya Volodin
 */

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var eslintTester = require("eslint-tester");

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------


eslintTester.addRuleTest("lib/rules/wrap-iife", {
    valid: [
        {
            code: "(function(){ }());",
            args: [1, "any"]
        },
        {
            code: "(function(){ })();",
            args: [1, "any"]
        },
        {
            code: "(function a(){ }());",
            args: [1, "any"]
        },
        {
            code: "(function a(){ })();",
            args: [1, "any"]
        },
        {
            code: "(function a(){ }());",
            args: [1, "outside"]
        },
        {
            code: "(function a(){ })();",
            args: [1, "inside"]
        }
    ],
    invalid: [
        {
            code: "0, function(){ }();",
            errors: [{ message: "Wrap an immediate function invocation in parentheses.", type: "CallExpression"}]
        },
        {
            code: "[function(){ }()];",
            errors: [{ message: "Wrap an immediate function invocation in parentheses.", type: "CallExpression"}]
        },
        {
            code: "var a = function(){ }();",
            errors: [{ message: "Wrap an immediate function invocation in parentheses.", type: "CallExpression"}]
        },
        {
            code: "(function(){ }(), 0);",
            errors: [{ message: "Wrap an immediate function invocation in parentheses.", type: "CallExpression"}]
        },
        {
            code: "(function a(){ })();",
            args: [1, "outside"],
            errors: [{ message: "Move the invocation into the parens that contain the function.", type: "CallExpression" }]
        },
        {
            code: "(function a(){ }());",
            args: [1, "inside"],
            errors: [{ message: "Wrap only the function expression in parens.", type: "CallExpression" }]
        }
    ]
});
