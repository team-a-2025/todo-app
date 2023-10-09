// 1, Vue.jsで扱うデータを用意する
const myData = {
	appName: "BMI Calculator",// アプリ名
	message: "身長と体重を入力してください",// メッセージ
	cm: 160,// 身長
	kg: 60,// 体重
	bmi: 0// BMI値
}

// 2, Vue.jsの準備をする
const app = Vue.createApp({
	data(){
		return myData;// 扱うデータを指定する
	},
	created(){
		console.log("created!!");
		this.calc();// 関数を実行する
	},
	methods:{
		calc(){// BMI値を計算する関数
			console.log("calc!!");
			this.bmi = this.kg / ((this.cm*0.01)**2);// BMI値の計算
		},
	},
});
app.mount("#app");// 3, Vue.jsを起動する