import { store } from "../../store";
// 弹出单列选择框
export const pickerMixin = {
    methods: {
        showPicker(obj, key, data, title) {
            this.picker = this.$createPicker({
                title: title,
                data: [data],
                onSelect: (selectedText) => {
                    store.setAction(obj, key, selectedText[0])
                },
                onCancel: this.cancelHandle
            })
            this.picker.show()
        }
    }
}

// 弹出输入框
export const propmtMixin = {
    methods: {
        showPrompt(obj, key, title) {
            this.dialog = this.$createDialog({
                type: 'prompt',
                title: title,
                prompt: {
                    value: '',
                    placeholder: '请输入'
                },
                onConfirm: (e, promptValue) => {
                    store.setAction(obj, key, promptValue)
                    // 移除现在的实例组件，不然再次调用时propmt中会显示上次选中的value值
                    this.dialog.remove()
                },
                onCancel: () => {
                    this.dialog.remove()
                }
            }).show()

        }
    }
}

// 日期选择
export const datePickerMixin = {
    methods: {
        showDatePicker(obj,key,title,min,max) {
            this.datePicker = this.$createDatePicker({
                title: title,
                min: min,
                max: max,
                value: new Date(),
                onSelect: date => {
                    store.setAction(obj, key, date)
                },
                onCancel: () => {
                    this.datePicker.remove()
                }
            })

            this.datePicker.show()
        }
    }
}

// 时间选择
export const timePickerMixin = {
    methods: {
        showTimePicker(title) {
            if (!this.timePicker) {
                this.timePicker = this.$createDatePicker({
                    title: title,
                    min: [0, 0, 0],
                    max: [23, 59, 59],
                    value: new Date(),
                    startColumn: 'hour',
                    onSelect: this.selectHandle,
                    onCancel: this.cancelHandle
                })
            }

            this.timePicker.show()
        },
        // selectHandle(date, selectedVal, selectedText) {
        //     this.$createDialog({
        //         type: 'warn',
        //         content: `Selected Item: <br/> - date: ${date} <br/> - value: ${selectedVal.join(', ')} <br/> - text: ${selectedText.join(' ')}`,
        //         icon: 'cubeic-alert'
        //     }).show()
        // },
        // cancelHandle() {
        //     this.$createToast({
        //         type: 'correct',
        //         txt: 'Picker canceled',
        //         time: 1000
        //     }).show()
        // }
    }
}