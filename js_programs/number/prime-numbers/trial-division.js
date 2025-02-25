let a, b, i, j, flag;

a = 2;
b = 11;

for(i = a; i <= b; i++) {
  if(i == 0 || i == 1)
    continue;
  flag = 1;
  for(j = 2; j <= i / 2; ++j) {
    if(i % j == 0) {
      flag = 0;
      break;
    }
  }
  if(flag == 1) 
    console.log(i)
}