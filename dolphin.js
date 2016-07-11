/**
 * Auther : mafumafuultu
 * License: GPLv3
 */
class Dolphin {
	constructor(){};
	static distinct(arr) {
		function f(el, idx, arr) {
			if (this.indexOf) {
				this.push(el);
				return true;
			}
		}
		return arr.filter(f,[]);
	}

	static diff(older, newer) {return {added: newer.filter(this._fil_ncon, older), removed: older.filter(this._fil_ncon, newer)};}

	static containsAll(resourceArr, searchArr){
		for(var i = searchArr.length; i--; ){
			if (resourceArr.indexOf(searchArr[i]) === -1) return false;
		}
		return true;
	}
	static max(arr) {return Math.max.apply(null, arr);}
	static maxExclude(arr, exc){return this.max(arr.filter(this._exc, exc));}
	static min(arr) {return Math.min.apply(null, arr);}
	static minExclude(arr, exc) {return this.min(arr.filter(this._exc, exc));}
	static sum(arr) {return arr.reduce((p,c,i,a) => p + c);}
	static sumExclude(arr, exc){return this.sum(arr.filter(this._exc, exc));}
	static avg(arr) {
		let len = arr.length;
		return (len === 0) ? void console.error('zero divide') : this.sum(arr) / len;
	}
	static avgExclude(arr, exc) {return this.avg(arr.filter(this._exc, exc));}

	static centerOfGravity2d(arr){
		var xArr = [], yArr = [], i = arr.length;
		for(; i--; ){
			xArr.push(arr[i].x);
			yArr.push(arr[i].y);
		}
		return {x: this.avg(xArr), y: this.avg(yArr)};
	}
	static centerOfGravity3d(arr){
		var xArr = [], yArr = [], zArr = [], i = arr.length;
		for(; i--; ){
			xArr.push(arr[i].x);
			yArr.push(arr[i].y);
			zArr.push(arr[i].z);
		}
		return {x: this.avg(xArr), y: this.avg(yArr), z: this.avg(zArr)};
	}

	/** @private */
	static _fil_ncon(e,i,a) {return (this.indexOf(e) === -1);}
	static _fil_con(e,i,a) {return this.indexOf(e) !== -1;}
	static _exc(e,i,ax) {return [e].some((e,i,a) => this.indexOf(e) === -1, [ax]);}
}
