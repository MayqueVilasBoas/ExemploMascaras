var app = angular.module('exemploMascara', []);

/*----------------------------------------------------------------------------*/
/* diretiva para mascara de telefone                                          */
/*----------------------------------------------------------------------------*/
app.directive("maskTelefone", function () {
    return {
        link : function(scope, element, attrs) {
            var options = {
                onKeyPress: function(val, e, field, options) {
                    putMask();
                }
            }

            $(element).mask('(00)00000-0000', options);

            function putMask() {
                var mask;
                var cleanVal = element[0].value.replace(/\D/g, '');//pega o valor sem mascara
                if(cleanVal.length > 10) {//verifica a quantidade de digitos.
                    mask = "(00)00000-0000";
                } else {
                    mask = "(00)0000-00009";
                }
                $(element).mask(mask, options);//aplica a mascara novamente
            }
        }
    }
});

/*----------------------------------------------------------------------------*/
/* diretiva para mascara de cpf                                               */
/*----------------------------------------------------------------------------*/
app.directive("maskCpf", function () {
    return {
        link : function(scope, element, attrs) {
            var options = {
                onKeyPress: function(val, e, field, options) {
                    putMask();
                }
            }

            $(element).mask('000.000.000-00', options);

            function putMask() {
                var mask;
                mask = "000.000.000-00";
                $(element).mask(mask, options);//aplica a mascara novamente
            }
        }
    }
});

/*----------------------------------------------------------------------------*/
/* diretiva para mascara de cnpj                                              */
/*----------------------------------------------------------------------------*/
app.directive("maskCnpj", function () {
    return {
        link : function(scope, element, attrs) {
            var options = {
                onKeyPress: function(val, e, field, options) {
                    putMask();
                }
            }

            $(element).mask('00.000.000/0000-00', options);

            function putMask() {
                var mask;
                mask = "00.000.000/0000-00";
                $(element).mask(mask, options);//aplica a mascara novamente
            }
        }
    }
});

/*----------------------------------------------------------------------------*/
/* diretiva para mascara de cep                                               */
/*----------------------------------------------------------------------------*/
app.directive("maskCep", function () {
    return {
        link : function(scope, element, attrs) {
            var options = {
                onKeyPress: function(val, e, field, options) {
                    putMask();
                }
            }

            $(element).mask('00.000-000', options);

            function putMask() {
                var mask;
                mask = "00.000-000";
                $(element).mask(mask, options);//aplica a mascara novamente
            }
        }
    }
});

/*----------------------------------------------------------------------------*/
/* diretiva para mascara de placa                                             */
/*----------------------------------------------------------------------------*/
app.directive('maskPlaca', function() {
	return {
		require: 'ngModel',
		link: function(scope, element, attrs, modelCtrl) {
			var capitalize = function(inputValue) {
                if(inputValue == undefined) inputValue = '';
                if (inputValue.length <= 3 ){
                    var capitalized = inputValue.toUpperCase().replace(/[^A-Z]/g,"");
                    if(capitalized !== inputValue) {
                        modelCtrl.$setViewValue(capitalized);
                        modelCtrl.$render();
                    }
                }
                putMask();

				return capitalized;
			}

            modelCtrl.$parsers.push(capitalize);
            capitalize(scope[attrs.ngModel]);  // capitalize initial value

            var options = {
                onKeyPress: function(val, e, field, options) {
                    putMask();
                }
            }

            $(element).mask('AAA-0000', options);

            function putMask() {
                var mask;
                mask = "AAA-0000";
                $(element).mask(mask, options);//aplica a mascara novamente
            }
		}
	};
});


/*----------------------------------------------------------------------------*/
/* diretiva para mascara de IP                                                */
/*----------------------------------------------------------------------------*/
app.directive("maskIp", function () {
    return {
        link : function(scope, element, attrs) {
            var options = {
                onKeyPress: function(val, e, field, options) {
                    putMask();
                }
            }

            $(element).mask('099.099.099.099', options);

            function putMask() {
                var mask;
                mask = "099.099.099.099";
                $(element).mask(mask, options);//aplica a mascara novamente
            }
        }
    }
});

/*----------------------------------------------------------------------------*/
/* diretiva para mascara de data                                              */
/*----------------------------------------------------------------------------*/
app.directive("maskData", function () {
    return {
        link : function(scope, element, attrs) {
            var options = {
                onKeyPress: function(val, e, field, options) {
                    putMask();
                }
            }

            $(element).mask('00/00/0000', options);

            function putMask() {
                var mask;
                mask = "00/00/0000";
                $(element).mask(mask, options);//aplica a mascara novamente
            }
        }
    }
});

/*----------------------------------------------------------------------------*/
/* diretiva para mascara de hora                                              */
/*----------------------------------------------------------------------------*/
app.directive("maskHora", function () {
    return {
        link : function(scope, element, attrs) {
            var options = {
                onKeyPress: function(val, e, field, options) {
                    putMask();
                }
            }

            $(element).mask('00:00', options);

            function putMask() {
                var mask;
                mask = "00:00";
                $(element).mask(mask, options);//aplica a mascara novamente
            }
        }
    }
});

/*----------------------------------------------------------------------------*/
/* diretiva para mascara de rg                                                */
/*----------------------------------------------------------------------------*/
app.directive("maskRg", function () {
    return {
        link : function(scope, element, attrs) {
            var options = {
                onKeyPress: function(val, e, field, options) {
                    putMask();
                }
            }

            $(element).mask('000000000000', options);

            function putMask() {
                var mask;
                mask = "000000000000";
                $(element).mask(mask, options);//aplica a mascara novamente
            }
        }
    }
});

/*----------------------------------------------------------------------------*/
/* diretiva para passar os caracteres para maiusculo                          */
/*----------------------------------------------------------------------------*/
app.directive('maskMaiusculas', function() {
	return {
		require: 'ngModel',
		link: function(scope, element, attrs, modelCtrl) {
			var capitalize = function(inputValue) {
				if(inputValue == undefined) inputValue = '';
				var capitalized = inputValue.toUpperCase();
				if(capitalized !== inputValue) {
					modelCtrl.$setViewValue(capitalized);
					modelCtrl.$render();
				}
				return capitalized;
			}
			modelCtrl.$parsers.push(capitalize);
			capitalize(scope[attrs.ngModel]);  // capitalize initial value
		}
	};
});

/*----------------------------------------------------------------------------*/
/* diretiva para passar os caracteres para minusculo                          */
/*----------------------------------------------------------------------------*/
app.directive('maskMinusculas', function() {
	return {
		require: 'ngModel',
		link: function(scope, element, attrs, modelCtrl) {
			var capitalize = function(inputValue) {
				if(inputValue == undefined) inputValue = '';
				var capitalized = inputValue.toLowerCase();
				if(capitalized !== inputValue) {
					modelCtrl.$setViewValue(capitalized);
					modelCtrl.$render();
				}
				return capitalized;
			}
			modelCtrl.$parsers.push(capitalize);
			capitalize(scope[attrs.ngModel]);  // capitalize initial value
		}
	};
});

/*----------------------------------------------------------------------------*/
/* diretiva para mascara de numero com casas decimais                         */
/*----------------------------------------------------------------------------*/
app.directive('maskDecimal', [ function ($filter) {
    return {
        require: '?ngModel',
        link: function (scope, elem, attrs, ctrl) {
            if (!ctrl) return;

            var format = {
                    prefix: '',
                    centsSeparator: ',',
                    thousandsSeparator: '.',
                    centsLimit: parseInt(attrs.maskDecimal)
                };

            ctrl.$parsers.unshift(function (value) {
                elem.priceFormat(format);
                return elem[0].value;
            });

            ctrl.$formatters.unshift(function (value) {
                elem[0].value = ctrl.$modelValue * 100 ;
                elem.priceFormat(format);
                return elem[0].value ;
            })
        }
    };
}]);

(function ($) {
    $.fn.priceFormat = function (options) {
        var defaults = {
            prefix: 'US$ ',
            suffix: '',
            centsSeparator: '.',
            thousandsSeparator: ',',
            limit: false,
            centsLimit: 2,
            clearPrefix: false,
            clearSufix: false,
            allowNegative: false,
            insertPlusSign: false
        };
        var options = $.extend(defaults, options);
        return this.each(function () {
            var obj = $(this);
            var is_number = /[0-9]/;
            var prefix = options.prefix;
            var suffix = options.suffix;
            var centsSeparator = options.centsSeparator;
            var thousandsSeparator = options.thousandsSeparator;
            var limit = options.limit;
            var centsLimit = options.centsLimit;
            var clearPrefix = options.clearPrefix;
            var clearSuffix = options.clearSuffix;
            var allowNegative = options.allowNegative;
            var insertPlusSign = options.insertPlusSign;
            if (insertPlusSign) allowNegative = true;

            function to_numbers(str) {
                var formatted = '';
                for (var i = 0; i < (str.length); i++) {
                    char_ = str.charAt(i);
                    if (formatted.length == 0 && char_ == 0) char_ = false;
                    if (char_ && char_.match(is_number)) {
                        if (limit) {
                            if (formatted.length < limit) formatted = formatted + char_
                        } else {
                            formatted = formatted + char_
                        }
                    }
                }
                return formatted
            }
            function fill_with_zeroes(str) {
                while (str.length < (centsLimit + 1)) str = '0' + str;
                return str
            }
            function price_format(str) {
                var formatted = fill_with_zeroes(to_numbers(str));
                var thousandsFormatted = '';
                var thousandsCount = 0;
                if (centsLimit == 0) {
                    centsSeparator = "";
                    centsVal = ""
                }
                var centsVal = formatted.substr(formatted.length - centsLimit, centsLimit);
                var integerVal = formatted.substr(0, formatted.length - centsLimit);
                formatted = (centsLimit == 0) ? integerVal : integerVal + centsSeparator + centsVal;
                if (thousandsSeparator || $.trim(thousandsSeparator) != "") {
                    for (var j = integerVal.length; j > 0; j--) {
                        char_ = integerVal.substr(j - 1, 1);
                        thousandsCount++;
                        if (thousandsCount % 3 == 0) char_ = thousandsSeparator + char_;
                        thousandsFormatted = char_ + thousandsFormatted
                    }
                    if (thousandsFormatted.substr(0, 1) == thousandsSeparator) thousandsFormatted = thousandsFormatted.substring(1, thousandsFormatted.length);
                    formatted = (centsLimit == 0) ? thousandsFormatted : thousandsFormatted + centsSeparator + centsVal
                }
                if (allowNegative && (integerVal != 0 || centsVal != 0)) {
                    if (str.indexOf('-') != -1 && str.indexOf('+') < str.indexOf('-')) {
                        formatted = '-' + formatted
                    } else {
                        if (!insertPlusSign) formatted = '' + formatted;
                        else formatted = '+' + formatted
                    }
                }
                if (prefix) formatted = prefix + formatted;
                if (suffix) formatted = formatted + suffix;
                return formatted
            }
            function key_check(e) {
                var code = (e.keyCode ? e.keyCode : e.which);
                var typed = String.fromCharCode(code);
                var functional = false;
                var str = obj.val();
                var newValue = price_format(str + typed);
                if ((code >= 48 && code <= 57) || (code >= 96 && code <= 105)) functional = true;
                if (code == 8) functional = true;
                if (code == 9) functional = true;
                if (code == 13) functional = true;
                if (code == 46) functional = true;
                if (code == 37) functional = true;
                if (code == 39) functional = true;
                if (allowNegative && (code == 189 || code == 109)) functional = true;
                if (insertPlusSign && (code == 187 || code == 107)) functional = true;
                if (!functional) {
                    e.preventDefault();
                    e.stopPropagation();
                    if (str != newValue) obj.val(newValue)
                }
            }
            function price_it() {
                var str = obj.val();
                var price = price_format(str);
                if (str != price) obj.val(price)
            }
            function add_prefix() {
                var val = obj.val();
                obj.val(prefix + val)
            }
            function add_suffix() {
                var val = obj.val();
                obj.val(val + suffix)
            }
            function clear_prefix() {
                if ($.trim(prefix) != '' && clearPrefix) {
                    var array = obj.val().split(prefix);
                    obj.val(array[1])
                }
            }
            function clear_suffix() {
                if ($.trim(suffix) != '' && clearSuffix) {
                    var array = obj.val().split(suffix);
                    obj.val(array[0])
                }
            }
            $(this).bind('keydown.price_format', key_check);
            $(this).bind('keyup.price_format', price_it);
            $(this).bind('focusout.price_format', price_it);
            if (clearPrefix) {
                $(this).bind('focusout.price_format', function () {
                    clear_prefix()
                });
                $(this).bind('focusin.price_format', function () {
                    add_prefix()
                })
            }
            if (clearSuffix) {
                $(this).bind('focusout.price_format', function () {
                    clear_suffix()
                });
                $(this).bind('focusin.price_format', function () {
                    add_suffix()
                })
            }
            if ($(this).val().length > 0) {
                price_it();
                clear_prefix();
                clear_suffix()
            }
        })
    };
    $.fn.unpriceFormat = function () {
        return $(this).unbind(".price_format")
    };
    $.fn.unmask = function () {
        var field = $(this).val();
        var result = "";
        for (var f in field) {
            if (!isNaN(field[f]) || field[f] == "-") result += field[f]
        }
        return result
    }
})(jQuery);
