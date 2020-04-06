// 弹出单列选择框
export const pickerMixin = {
    methods: {
        showPicker(data, title) {
            if (!this.picker) {
                this.picker = this.$createPicker({
                    title: title,
                    data: [data],
                    onSelect: this.selectHandle,
                    onCancel: this.cancelHandle
                })
            }
            this.picker.show()
        },
        selectHandle(selectedText) {
            this.$createDialog({
                type: 'warn',
                content: selectedText.join(' '),
                icon: 'cubeic-alert'
            }).show()
            // console.log(selectedText);
        },
        cancelHandle() {
            this.$createToast({
                type: 'correct',
                txt: '取消选择la',
                time: 1000
            }).show()
        }
    }
}

// 弹出输入框
export const propmtMixin = {
    methods: {
        showPrompt(title) {
            this.dialog = this.$createDialog({
                type: 'prompt',
                title: title,
                prompt: {
                    value: '',
                    placeholder: '请输入'
                },
                onConfirm: (e,promptValue) => {
                    // this.$createToast({
                    //     type: 'warn',
                    //     time: 1000,
                    //     txt: `Prompt value: ${promptValue || ''}`
                    // }).show()
                    console.log(promptValue);
                }
            }).show()
        }
    }
}

// 日期选择
export const datePickerMixin = {
    methods: {
        showDatePicker(title) {
            if (!this.datePicker) {
                this.datePicker = this.$createDatePicker({
                    title: title,
                    min: new Date(2000,1,1),
                    max: new Date(2025, 9, 20),
                    value: new Date(),
                    onSelect: this.selectHandle,
                    onCancel: this.cancelHandle
                })
            }

            this.datePicker.show()
        },
        selectHandle(date) {
            this.$createDialog({
                type: 'warn',
                content: `Selected Item: <br/> - date: ${date} <br/> - <br/> `,
                icon: 'cubeic-alert'
            }).show()
        },
        // cancelHandle() {
        //     this.$createToast({
        //         type: 'correct',
        //         txt: 'Picker canceled',
        //         time: 1000
        //     }).show()
        // }
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