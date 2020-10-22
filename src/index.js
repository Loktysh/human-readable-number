module.exports = function toReadable (number) {
//     let res = 145;
//    function toReadable (number) {
    let li = {
      '1': 'one ',
      '2': 'two ',
      '3': 'three ',
      '4': 'four ',
      '5': 'five ',
      '6': 'six ',
      '7': 'seven ',
      '8': 'eight ',
      '9': 'nine ',
    }
    let li2 = {
      '2': 'twenty ',
      '3':'thirty ',
      '4':'forty ',
      '5':'fifty ',
      '6': 'sixty ',
      '7': 'seventy ',
      '8': 'eighty ',
      '9': 'ninety ',
    }
    let li3 = {
        '0':	'zero',
        '1':	'one',
        '2':	'two',
        '3':    'three',
        '4':	'four',
        '5':	'five',
        '6':    'six',
        '7':	'seven',
        '8':	'eight',
        '9':	'nine',
        '10':	'ten',
        '11':	'eleven',
        '12':	'twelve',
        '13':	'thirteen',
        '14':	'fourteen',
        '15':	'fifteen',
        '16':	'sixteen',	
        '17':	'seventeen',
        '18':	'eighteen',	
        '19':	'nineteen',
    }
    let lizero = {
        '01':	'one',
        '02':	'two',
        '03':    'three',
        '04':	'four',
        '05':	'five',
        '06':    'six',
        '07':	'seven',
        '08':	'eight',
        '09':	'nine',
        '10':	'ten',
        '11':	'eleven',
        '12':	'twelve',
        '13':	'thirteen',
        '14':	'fourteen',
        '15':	'fifteen',
        '16':	'sixteen',	
        '17':	'seventeen',
        '18':	'eighteen',	
        '19':	'nineteen',
    }
    let res1, res2, res3, hundred;
     number = number.toString();
     len = number.length;
     num1 = number.slice(0, 1);
     num2 = number.slice(1, 2);
     num3 = number.slice(2, 3);
     let a, b, c;
     if ( number < 20) {
         return li3[number];
     }
     else {
    // (len === 3 && num2 !== '0' ? (li2[num2]+' '+li[num3]) : (len === 2 && num2 !== '0' ? li[num2] : (num2 === '0' ? li[num3] : '')))
    //  }
     res1 = len !== 2 ? li[num1] : li2[num1];
     hunderd = (len === 3 ? 'hundred ' : '');
     res2 = (number.slice(1,3) < 20 ? lizero[number.slice(1,3)] : len === 3 ? li2[num2] : '');
     res3 = (len === 3 ? (num3 !== '0' && number.slice(1,3) > 20 ? li[num3] : (number.slice(1,3) < 20 ? lizero[num3] : li[num3]))     :    li[num2]);
     return (((res1 + hunderd + res2 + res3).replace(/undefined/g,'')).trim());
    }
}
//     console.log(toReadable(res))
// }
