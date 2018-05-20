// window.onload = (() => {
//     $('body #page-body').text('onload js complited!!');
// })

window.onload = (() => {
  const min = 894;
  const max = 2548;
  let rdmWidth = Math.floor( Math.random() * ( max + 1 - min)) + min;
  $('#entity-containe').width(rdmWidth);

  $('div#virtual-scroll>div').width(rdmWidth);
});

// スクロール連動
function scrLinkage(ids){
  let j = jQuery.noConflict();
	st = j('#'+ids).scrollLeft();
	j('.linkage').scrollLeft(st);
}