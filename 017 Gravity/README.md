## Things I've learned 
**[Chris course - How to Code: Gravity]**



- #### Summary

  - ball이 바닥으로 하강
    - dy += graivity
    - y = dy / x = dx
  - ball이 하강하다 바닥에 닿는 순간
    - dy = -dy * friction
  - ball이 bounce후 다시 올라올때
    - -dy * friction 되었으므로 gravity를 계속 더해줘서 다시 양수로 변환
    - 처음 draw 되었던 포인트 보다 friction 곱해준 만큼의 포인트에서 다시 하강
  - ball이 양쪽 벽에 닿을 순간
    - dx = -dx * friction

