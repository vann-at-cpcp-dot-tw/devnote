import { filter, Subject, fromEvent } from "rxjs"
import React, { useEffect } from 'react'

export default function Counter(){

  useEffect(()=>{
    let count:number | null = null
    let counter$: Subject<number>
    const buttonStart = window.document.querySelector("#btn-new") as HTMLButtonElement
    const buttonCount = window.document.querySelector("#btn-count") as HTMLButtonElement
    const buttonError = document.querySelector("#btn-error") as HTMLButtonElement
    const buttonComplete = document.querySelector("#btn-complete") as HTMLButtonElement
    const fieldStatus = document.querySelector("#show-status") as HTMLElement
    const fieldCount = document.querySelector("#show-count") as HTMLElement
    const fieldEven = document.querySelector("#show-even") as HTMLElement

    fromEvent(buttonStart, "click").subscribe((e) => {
      counter$ = new Subject()
      count = 0

      // 訂閱 counter$ 並顯示目前計數值
      counter$.subscribe({
        next: (data) => {
          fieldStatus.innerHTML = "開始計數！"
          fieldCount.innerHTML = `${data}`
        },
        error: (msg) => {
          fieldStatus.innerHTML = `錯誤（${msg}）`
        },
        complete: () => {
          fieldStatus.innerHTML = `已完成。`
        }
      })

      // 訂閱偶數事件
      counter$.pipe(filter((data) => data % 2 === 0)).subscribe((data) => {
        fieldEven.innerHTML = `${data}`
      })

      counter$.next(count)
    })

    // 「計數」按鈕事件訂閱
    fromEvent(buttonCount, "click").subscribe(() => {
      if (count === null || counter$.isStopped) {
        return
      }

      count++
      counter$.next(count)
    })

    // 「錯誤」按鈕事件訂閱
    fromEvent(buttonError, "click").subscribe(() => {
      if (count === null || counter$.isStopped) {
        return
      }

      const msg = window.prompt("What's wrong?") || "error"
      counter$.error(msg)
    })

    // 「完成」按鈕事件訂閱
    fromEvent(buttonComplete, "click").subscribe(() => {
      if (count === null || counter$.isStopped) {
        return
      }

      counter$.complete()
    })

  }, [])

  return <div className="bg-white text-black py-6">
      <div className="flex container py-4">
        <button className="mx-2 border border-black p-1" id="btn-new">開始新的計數器</button>
        <button className="mx-2 border border-black p-1" id="btn-count">計數</button>
        <button className="mx-2 border border-black p-1" id="btn-error">發生錯誤</button>
        <button className="mx-2 border border-black p-1" id="btn-complete">完成計數</button>
      </div>
      <div className="container">
        <hr />
        <div>目前狀態：<span id="show-status"></span></div>
        <div>目前計數：<span id="show-count"></span></div>
        <div>偶數計數：<span id="show-even"></span></div>
      </div>
  </div>
}