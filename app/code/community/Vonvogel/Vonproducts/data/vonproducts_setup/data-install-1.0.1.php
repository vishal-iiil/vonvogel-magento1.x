<?php
/**
 * Created by PhpStorm.
 * User: abid
 * Date: 4/11/18
 * Time: 12:33 PM
 */


$installer = $this;
$installer->startSetup();

$websiteIds = Mage::getModel('core/website')->getCollection()
    ->addFieldToFilter('website_id', array('neq' => 0))
    ->getAllIds();
$productsArray = array(
    'Strap' => array(
        'name' => 'VON VOGEL BRACELET',//BRACELET - br
        'sku' => 'VONBR',
        'description' => 'Base template product for VON VOGEL Strap',
        'short_description' => 'Base template product for VON VOGEL Strap',
        'meta_title' => 'VON VOGEL Strap'
    ),
    'Dial' => array(
        'name' => 'VON VOGEL CYLINDER',//CYLINDER - cy
        'sku' => 'VONCY',
        'description' => 'Base template product for VON VOGEL Dial',
        'short_description' => 'Base template product for VON VOGEL Dial',
        'meta_title' => 'VON VOGEL Dial'
    ),
    'Case' => array(
        'name' => 'VON VOGEL CASE',//CASE - ca
        'sku' => 'VONCA',
        'description' => 'Base template product for VON VOGEL Case',
        'short_description' => 'Base template product for VON VOGEL Case',
        'meta_title' => 'VON VOGEL Case'
    )
);

foreach ($productsArray as $productArray) {
    $product = Mage::getModel('catalog/product');
    $product->setStoreId(0); //use this instead of Mage::app()->setCurrentStore(Mage_Core_Model_App::ADMIN_STORE_ID);
    $product->setWebsiteIds($websiteIds);
    $product->setTypeId('simple');
    $product->addData(array(
        'name' => $productArray['name'],
        'attribute_set_id' => $product->getDefaultAttributeSetId(), //use the default attribute set or an other id if needed.
        'status' => Mage_Catalog_Model_Product_Status::STATUS_ENABLED, //set product as enabled
        'visibility' => Mage_Catalog_Model_Product_Visibility::VISIBILITY_NOT_VISIBLE, //set visibility in catalog and search
        'meta_title' => $productArray['meta_title'],
        'weight' => 1,
        'sku' => $productArray['sku'],
        'tax_class_id' => 2, //could not find a non-hardcoded value for this
        'description' => $productArray['description'],
        'short_description' => $productArray['short_description'],
        'stock_data' => array( //set stock data
            'manage_stock' => 0,
            'qty' => 999, //set the qty
            'use_config_manage_stock' => 0,
            'use_config_min_sale_qty' => 0,
            'use_config_max_sale_qty' => 0,
            'use_config_enable_qty_increments' => 0,
            'in_stock' => 1
        ),

    ));
    $product->save();
}


$installer->endSetup();
