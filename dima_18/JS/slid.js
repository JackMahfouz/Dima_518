var i=1;
function next() {
  let sorc = ["imgs/cover1.jpg", "imgs/cover.jpg", "imgs/cover2.jpg", "imgs/img1.jpg", "imgs/img2.jpg", "imgs/img3.jpg", "imgs/img4.jpg", "imgs/img5.jpg"]
  const sld = document.getElementById("image");
  sld.src = sorc[i];
  i++;
  if(i==(sorc.length))
  {
    i=0;
  }
}
function prev() {

  let sorc = ["imgs/cover1.jpg", "imgs/cover.jpg", "imgs/cover2.jpg", "imgs/img1.jpg", "imgs/img2.jpg", "imgs/img3.jpg", "imgs/img4.jpg", "imgs/img5.jpg"]
  const sld = document.getElementById("image");
  i--;
  if(i<=0)
  {
    i=(sorc.length-1);
  }
  sld.src = sorc[i-1];

}
function prev1() {

  let sorc = ["imgs/cover1.jpg", "imgs/cover.jpg", "imgs/cover2.jpg", "imgs/img1.jpg", "imgs/img2.jpg", "imgs/img3.jpg", "imgs/img4.jpg", "imgs/img5.jpg"]
  const sld = document.getElementById("image1");
  i--;
  if(i<=0)
  {
    i=(sorc.length-1);
  }
  sld.src = sorc[i-1];

}
function next1() {
  let sorc = ["imgs/cover1.jpg", "imgs/cover.jpg", "imgs/cover2.jpg", "imgs/img1.jpg", "imgs/img2.jpg", "imgs/img3.jpg", "imgs/img4.jpg", "imgs/img5.jpg"]
  const sld = document.getElementById("image1");
  sld.src = sorc[i];
  i++;
  if(i==(sorc.length))
  {
    i=0;
  }
}
