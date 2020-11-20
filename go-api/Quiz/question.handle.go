package Quiz

import (
	"fmt"
	"gin-gorm/Config"

	_ "github.com/go-sql-driver/mysql"
)

//GetRecords ...
func Gets(question *[]Question) (err error) {
	if err = Config.DB.Find(question).Error; err != nil {
		return err
	}
	return nil
}

//CreateRecord ...
func Create(question *Question) (err error) {
	if err = Config.DB.Create(question).Error; err != nil {
		return err
	}
	return nil
}

//GetRecordByID ...
func GetByID(question *Question, id string) (err error) {
	if err = Config.DB.Where("id = ?", id).First(question).Error; err != nil {
		return err
	}
	return nil
}

//UpdateRecord ...
func Update(question *Question, id string) (err error) {
	fmt.Println(question)
	Config.DB.Save(question)
	return nil
}

//DeleteRecord ...
func Delete(question *Question, id string) (err error) {
	Config.DB.Where("id = ?", id).Delete(question)
	return nil
}
